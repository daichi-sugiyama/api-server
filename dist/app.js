"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const Express = require("express");
const app = Express();
exports.app = app;
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("Hello VS Code!!");
});
const tasks = [
    {
        category: "Private",
        title: "買い物",
        done: false,
    },
];
app.get('/tasks', (req, res) => {
    res.json(tasks);
});
app.post('/tasks', (req, res) => {
    const received = req.body;
    if ("category" in received && "title" in received && "done" in received) {
        const newTask = {
            category: received.category,
            title: received.title,
            done: received.done
        };
        //tasksにnewTaskを追加
        tasks.push(newTask);
        console.log('Add:', newTask);
        res.send("アイテムが追加されました");
    }
    else {
        res.status(400).send("パラメータは無効です");
    }
});
//# sourceMappingURL=app.js.map