const fs = require('fs');
const EventEmitter = require('events');

// let data = undefined
class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    console.log(args)
    console.log(...args)
    this.emit('begin');
    console.time('execute');
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }

      this.emit('data', data);
      console.timeEnd('execute');
      this.emit('end');
    });
  }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));
withTime.on('data', (data) => console.log(data));
withTime.on('error', (err) => console.log(err));

withTime.execute(fs.readFile, 'fileDOesNotexist');
withTime.execute(fs.readFile, __filename);

// cehckout this doc =  https://github.com/jscomplete/book-node-beyond-basics/blob/main/300-node-events.adoc