# mbed-js-st-fw-example
Example project for using flash storage for JS firmware on Mbed OS.

## Included libraries
* [mbed-js-st-serial-interface](https://github.com/syed-zeeshan/mbed-js-st-serial-interface)
* [mbed-js-st-network-interface](https://github.com/syed-zeeshan/mbed-js-st-network-interface)
* [mbed-js-mqtt](https://github.com/syed-zeeshan/mbed-js-mqtt)

## Dependencies

Install:

* A recent version of [node.js](http://nodejs.org/).
* [Gulp](http://gulpjs.com/).
* [mbed CLI](https://github.com/ARMmbed/mbed-cli) and its dependencies.

On Windows you'll also need:

* [GNU Make](http://gnuwin32.sourceforge.net/packages/make.htm).

Make sure that `make`, `arm-none-eabi-gcc` and all other tools are in your [PATH](http://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/).

## Build

1. Run `npm install`.
2. Run `gulp --target=YOUR_TARGET_NAME`.
    * To find your target name, look at the [platforms](http://developer.mbed.org/platforms/) page for your development board.
3. Copy the `mbedos5.hex` or `mbedos5.bin` file from `build/out/YOUR_TARGET_NAME` onto your development board.
4. Project will run!
