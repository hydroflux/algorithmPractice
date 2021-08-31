// CHALLENGE => Tortoise Racing
/* Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

Examples:
(form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
Note:
See other examples in "Your test cases".

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

** Hints for people who don't know how to convert to hours, minutes, seconds:

Tortoises don't care about fractions of seconds
Think of calculation by hand using only integers (in your code use or simulate integer division)
or Google: "convert decimal time to hours minutes seconds" */

// METHOD 1 => Status Quo

let v1 = 80
let v2 = 100
let lead = 40

const race = ( v1, v2, lead ) => {
    if ( v1 >= v2 ) return null

    const feet_per_second = speed => speed / 3600

    // Speed
    let v1_fps = feet_per_second( v1 )
    let v2_fps = feet_per_second( v2 )

    // Time Elapsed
    let time_elapsed = 0
    
    // Position
    let v1_pos = lead
    let v2_pos = 0
    
    while ( v1_pos > v2_pos ){
        time_elapsed += 1
        v1_pos += v1_fps
        v2_pos += v2_fps
    }

    const secondsToHMS = time_elapsed => {
        let hours = Math.floor( time_elapsed / 3600 )
        let minutes = Math.floor( time_elapsed % 3600 / 60 )
        let seconds = Math.floor( time_elapsed % 3600 % 60 )
        return [ hours, minutes, seconds ]
    }

    return secondsToHMS(time_elapsed - 1)
}

// METHOD 2
const race2 = ( v1, v2, lead ) => {
    let time = lead / ( v2 - v1 )
    return v2 > v1
        ? [ Math.floor( time ),
            Math.floor( time*60%60 ),
            Math.floor( time*3600%60 )]
        : null
}