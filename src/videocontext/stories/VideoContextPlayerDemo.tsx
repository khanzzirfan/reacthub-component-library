import React from "react";
import { VideocontextPlayer } from "../component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
// import { debounce } from "lodash";

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
import useDebounce from "./useDebounce";

const playIcon = <FontAwesomeIcon icon={faPlay} />;
const pauseIcon = <FontAwesomeIcon icon={faPause} />;
const stopIcon = <FontAwesomeIcon icon={faStop} />;

export const VideoContextPlayerDemo = (args) => {
  const { percentage = 0, play = false } = args;
  const [currentDuration, setCurrentDuration] = React.useState(0);
  const [inPlay, setInPlay] = React.useState(play);

  const currentTime = useDebounce(currentDuration, 1000);
  // const debounceDurationUpdate = React.useRef(
  //   debounce((currTime) => {
  //     console.log("inside debounce");
  //     setCurrentDuration(currTime);
  //   }, 100),
  // ).current;

  const handleOnDurationChange = React.useCallback((duration) => {
    setCurrentDuration(duration);
  }, []);

  const handleOnFrameUpdate = React.useCallback((currTime) => {
    setCurrentDuration(currTime);
  }, []);

  const handleOnPlay = React.useCallback(() => {
    setInPlay(true);
  }, []);

  const handleOnPause = React.useCallback(() => {
    setInPlay(false);
  }, []);

  return (
    <Box>
      <ChakraProvider>
        <VideocontextPlayer
          {...args}
          ondurationchange={handleOnDurationChange}
          ontimeupdate={handleOnFrameUpdate}
          play={inPlay}
        />
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
                onClick={handleOnPlay}
              />
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={pauseIcon}
                onClick={handleOnPause}
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
            ></Flex>
            <Flex color="black" justifyContent="center" alignItems="center">
              <Text fontSize="md">{currentTime}</Text>
            </Flex>
          </Flex>
        </Box>
      </ChakraProvider>
    </Box>
  );
};
