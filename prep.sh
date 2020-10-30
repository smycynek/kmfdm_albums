#! /bin/bash
rm -rf build
rm -rf kmfdm

yarn build

mv build kmfdm
