# Background

The challenge has 19 bytes, each containing 1 bit, represented by an SR-latch.
The goal is to find the corresponding bits that turn all LEDs green.


# Observations

First, notice that this line of code is consitently repeated, though the nth-child and nth-of-type number may differ:
```css
.wrapper:has(.byte:nth-child(2) .latch:nth-child(7) .latch__reset:active) .checker:nth-of-type(2) .checker__state:nth-child(3) {
    transform: translateX(0%);
    transition: transform 0s;
}

.wrapper:has(.byte:nth-child(2) .latch:nth-child(7) .latch__set:active) .checker:nth-of-type(2) .checker__state:nth-child(3) {
    transform: translateX(-100%);
    transition: transform 0s;
}
```


This suggests that this may have something to do with the actual bits.

Notice also that also that each `.checker` has many `.checker__state` divs, but has varying amounts of them.
This suggests that each `.checker` div is an LED, and `.checker__state` corresponds to whether the LED turns red or green.
Through inspect element, we can tell that `.checker__state` is an element that when `transform: translateX(0%);` means
that the LED is red. When all `.checker__state` elements are `transform: translateX(-100%);`, then the LED turns green.


# Solution
Find every occurence of `.wrapper:has(.byte:nth-child(<byte>) .latch:nth-child(<bit>) .latch__reset:active) .checker:nth-of-type(<led_id>) .checker__state:nth-child(<red_led_filament_id>) {`

Then check if the transform property for each rule is `transform: translateX(0%);` or `transform: translateX(-100%);`. 
If it it's `transform: translateX(-100%);`, then set the corresponding `<byte>` `<bit>` to 0.
Otherwise, if it it's `transform: translateX(0%);`, then set it to 1.

Once you have filled in every bit, convert the bytes to ASCII. One may do so with CyberChef.

Wrap in `uoftctf{}` and you have the flag

# Flag
`uoftctf{CsS_l0g1c_is_fun_3h}`