
var MinStack = function() {
    this.head = null
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
   let currentMin = this.head === null ? value : Math.min(value, this.head.min);
    
    let node = {
        value: value,
        min: currentMin,
        next: this.head
    };
    
    this.head = node;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let pointer = this.head 
    this.head = pointer.next
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.head.value
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.head.min
};


var obj = new MinStack()
obj.push(value)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()