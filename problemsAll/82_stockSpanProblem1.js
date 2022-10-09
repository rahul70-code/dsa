//https://leetcode.com/problems/online-stock-span/submissions/
var StockSpanner = function () {
    this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let span = 1
    while (this.stack.length !== 0 && this.stack[this.stack.length - 1].price <= price) {
        let pop = this.stack.pop()
        span += pop.span
    }
    this.stack.push({ price, span })

    return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

/// IMP*************
//https://leetcode.com/problems/online-stock-span/discuss/168311/C%2B%2BJavaPython-O(1)