/*
 @author: tang
 @title: 实现一个简单的promise, 包含链式调用，处理异步resolve
 @date: 2020/11/14
 */
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class Promise {
  constructor(executor) {
    // 默认状态为 PENDING
    this.status = PENDING;
    // 存放成功状态的值，默认为 undefined
    this.value = undefined;
    // 存放失败状态的值，默认为 undefined
    this.reason = undefined;
    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks= [];

    // 调用此方法就是成功
    let resolve = (value) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 依次将对应的函数执行
        this.onResolvedCallbacks.forEach(fn=>fn());
      }
    }

    // 调用此方法就是失败
    let reject = (reason) => {
      // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
      if(this.status ===  PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 依次将对应的函数执行
        this.onRejectedCallbacks.forEach(fn=>fn());
      }
    }

    try {
      // 立即执行，将 resolve 和 reject 函数传给使用者
      executor(resolve,reject)
    } catch (error) {
      // 发生异常时执行失败逻辑
      reject(error)
    }
  }

  // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected
  then(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {

      const _onFulfilled = res => {
        try {
          //注意这里resolve有可能要处理的是一个promise
          resolve(onFulfilled(res));
        } catch (err) {
          reject(err);
        }
      };
      const _onRejected = err => {
        try {
          reject(onRejected(err));
        } catch (_err) {
          reject(_err);
        }
      };
      if (this.status === FULFILLED) {
        _onFulfilled(this.value)
      }

      if (this.status === REJECTED) {
        _onRejected(this.reason)
      }
      if (this.status === PENDING) {
        // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
        this.onResolvedCallbacks.push(() => {
          _onFulfilled(this.value)
        });

        // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
        this.onRejectedCallbacks.push(()=> {
          _onRejected(this.reason);
        })
      }
    });
  }
}
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功');
  },1000);
}).then(
  (data) => {
    console.log('success', data)
    return 'then success'
  },
  (err) => {
    console.log('faild', err)
  }
).then((data) => {
  console.log(data)
})