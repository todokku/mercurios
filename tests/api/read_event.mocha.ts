import $axios, { AxiosResponse } from "axios";
import env from "@bahatron/env";
import { expect } from "chai";
import $mysql from "../utils/mysql";
import $nats from "../utils/nats";
import $logger from "@bahatron/logger";
import { _publishEvent } from "./publish_event.mocha";

const MERCURIOS_TEST_URL = env.get("TEST_URL");

// process.on("uncaughtException", err => {
//     $logger.warning("unhandled error", err);
//     $logger.error(err as Error);
// });

// process.on("unhandledRejection", (reason, promise) => {
//     $logger.warning("unhandled promise failure", reason);
//     $logger.error(reason as Error);
// });

describe("Feature: read event", () => {
    async function readEvent(topic: string, id: number) {
        return $axios
            .get(`${MERCURIOS_TEST_URL}/stream/${topic}/${id}`)
            .catch(err => {
                $logger.error(err);
                throw err;
            });
    }

    describe("Scenario: topic does not exist", () => {
        it("responds with http 404", async () => {
            return new Promise(async resolve => {
                readEvent(`non_existant_topic`, 2).catch(err => {
                    resolve(expect(err.response.status).to.eq(404));
                });
            });
        });
    });

    describe("Scenario: topic exists but event does not", () => {
        const _topic = `read_event_test`;
        let _response: AxiosResponse;

        before(async () => {
            await $mysql(`stream_${_topic}`).truncate();
            await _publishEvent(_topic, "hello", 1);
            _response = await readEvent(_topic, 2);
        });

        it("responds with http 204", () => {
            expect(_response.status).to.eq(204);
        });

        it("response payload is empty", async () => {
            expect(Boolean(_response.data)).to.be.false;
        });
    });

    describe("Scenario: topic and event exists", () => {
        const _topic = `read_event_test`;
        let _event: any;

        before(async () => {
            _event = (await _publishEvent(_topic, { rick: "sanchez" })).data;
        });

        it("responds with an event", async () => {
            let response = await readEvent(_topic, _event.seq);

            expect(response.data).to.deep.eq(_event);
        });

        it("has the expected schema", async () => {
            expect(_event).to.have.all.keys([
                "seq",
                "published_at",
                "data",
                "topic",
            ]);
        });
    });
});