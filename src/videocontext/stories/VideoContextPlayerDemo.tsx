// @ts-nocheck
import React from "react";
import { VideocontextPlayer } from "../component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
  Center,
  Text,
  Square,
  Button,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

const playIcon = <FontAwesomeIcon icon={faPlay} />;
const pauseIcon = <FontAwesomeIcon icon={faPause} />;
const stopIcon = <FontAwesomeIcon icon={faStop} />;

export const VideoContextPlayerDemo = (args) => {
  const { percentage = 0 } = args;
  return (
    <Box>
      <ChakraProvider>
        <VideocontextPlayer {...args} />
        <Box data-testid="progressbar">
          <Box
            style={{
              width: `${percentage}%`,
              background: "red",
              height: "100%",
              borderRadius: "inherit",
            }}
          />
          <Flex color="white" marginTop={2} flexDirection="row">
            <Flex justifyContent="flex-start" alignItems="center">
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={playIcon}
              />
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={pauseIcon}
              />
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={stopIcon}
              />
            </Flex>
            <Flex
              flex={1}
              justifyContent="flex-start"
              alignItems="center"
              mx={2}
            >
              <Slider aria-label="slider-ex-1" defaultValue={30}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Flex>
            <Flex color="black" justifyContent="center" alignItems="center">
              <Text fontSize="md">00:00:00</Text>
            </Flex>
          </Flex>
        </Box>
      </ChakraProvider>
    </Box>
  );
};
