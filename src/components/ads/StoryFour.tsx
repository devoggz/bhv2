"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

import React, { useState } from "react";
import { CustomButton } from "../CustomButton";
import ReactPlayer from "react-player";
import CompleteButton from "../CompleteButton";

const StoryFour = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isPlaying, setPlaying] = useState(false);

  const router = useRouter();
  return (
    <div>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          {/* <p className="text-tiny text-white/60 uppercase font-bold">
            Life Ijipe Leo
          </p>
          <h4 className="text-white font-bold text-xl">
            Sema YEA to new begginings
          </h4> */}
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="/images/free.png"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-white text-lg font-bold">
              Jijenge na TVS mpya!{" "}
            </p>
            <p className="text-white text-tiny">
              {" "}
              Buy any TVS motorbike for boda boda or deliveries
            </p>
          </div>
          <Button
            className="rounded-full bg-bhpink text-white p-4"
            onPress={onOpen}
          >
            Tazama Tangazo 5 points
          </Button>
          <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Soko la Boda
                  </ModalHeader>
                  <ModalBody>
                    <div className="overflow-hidden rounded-2xl ">
                      <ReactPlayer
                        url="https://web.facebook.com/watch/?v=575485860771979"
                        className="react-player"
                        width="100%"
                        height="100%"
                        onP
                        controls={false}
                        playing={true}
                        onError={(e) =>
                          console.error("Error playing video: ", e)
                        }
                      />
                      {/* <Video src={videoURL} /> */}
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      className="w-full"
                      color="default"
                      onPress={onClose}
                    >
                      Complete Ad
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StoryFour;
