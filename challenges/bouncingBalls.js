// CHALLENGE
// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// CONDITIONS FOR VALID EXPERIMENT
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter

// METHOD 1
function bouncingBall(h,  bounce,  window) {
    if ( h <= 0 ) return -1
    if ( bounce <= 0 || bounce >= 1 ) return -1
    if ( window >= h ) return -1
    
    count = 0
    while (h > window){
      count += 1
      if (bounce * h > window) {
        count += 1
      }
      
      h = bounce * h
    }
    
    return count
}

// METHOD 2
const bouncingBall2 = (h, bounce, window) => {
    let rebounds = -1
    if ( bounce > 0 && bounce < 1 ) while ( h > window ) rebounds += 2, h *= bounce
    return rebounds
}

// TESTS
console.log( bouncingBall(3.0, 0.66, 1.5) === 3 )
console.log( bouncingBall(30.0, 0.66, 1.5) === 15 )
console.log( bouncingBall2(3.0, 0.66, 1.5) === 3 )
console.log( bouncingBall2(30.0, 0.66, 1.5) === 15 )
