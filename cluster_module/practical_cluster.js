const cluster = require("cluster");
const os = require("os");

const numberOfUsersInDB = function () {
    this.count = this.count || 5;
    this.count = this.count + this.count;
    return this.count;
};

const updateWorkers = () => {
    const usersCount = numberOfUsersInDB();
    Object.values(cluster.workers).forEach((worker) => {
        worker.send({ usersCount });
    });
};


if (cluster.isMaster) {
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} CPUs`);
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    // cluster module uses child_process.fork API under the hood and because of that can send messages to worker process
    updateWorkers();
    setInterval(updateWorkers, 10000);
} else {
    require("./practical_server");
}


