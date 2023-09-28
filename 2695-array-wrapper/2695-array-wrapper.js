
var ArrayWrapper = function(nums) {
    this.array = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.array.reduce((acc, curr) => acc + curr, 0);
}

ArrayWrapper.prototype.toString = function() {
    return "[" + this.array.join(",") + "]";
}
