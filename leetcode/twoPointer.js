//Container With Most Water

var maxArea = function(height) {
    let left = max = 0
    let right = width = height.length - 1
    while(left < right){
        let minHeight = Math.min(height[left] , height[right])
        let area = minHeight * width
        if(area > max){
            max = area
        }
        width--
        if(height[left] < height[right]){
            left++
        } else {
            right--
        }
    }
    return max
};