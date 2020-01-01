module.exports = {
    apps: [
        {
            name: "dev_server",
            script: "dist/bin/www.js",
            exec_mode: "cluster",
            instances: 2,
            watch: ["dist"],
            env: {
                NODE_OPTIONS: "--inspect=0.0.0.0:9220",
            },
        },
    ],
};
