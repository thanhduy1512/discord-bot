"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ready = (client) => {
    client.on("ready", () => {
        var _a;
        console.log(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag} is online`);
        const channel = client.channels.cache.get("1021345502215802961");
        if (channel === null || channel === void 0 ? void 0 : channel.isTextBased)
            channel.send({ content: "content" });
    });
};
exports.default = ready;
