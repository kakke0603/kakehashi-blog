"use client";
import { Button, Divider, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useAnimate } from "framer-motion";

export const FramerMotion = () => {
  const [flg, setFlg] = useState(false);
  const onClick = () => setFlg(!flg);

  return (
    <div>
      <Link isExternal href="https://www.framer.com/motion/" showAnchorIcon>
        Framer Motion
      </Link>
      <div className="mt-5">
        1.ボタンを押すと回転する。
        <br />
        <Button color="primary" fullWidth onClick={onClick}>
          ボタン
        </Button>
        <motion.div
          className="bg-green-500 w-40 h-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={flg ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 1 }}
        >
          rotate
        </motion.div>
      </div>
      <Divider className="my-4" />
      <div>
        2.X方向にドラッグできる。
        <motion.div
          className="bg-red-500 w-20 h-20 mt-2"
          animate={{ x: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
        >
          drag me
        </motion.div>
      </div>
      <Divider className="my-4" />
      <div>
        3.Y方向にドラッグできる。
        <motion.div
          className="bg-pink-500 w-20 h-20 mt-2"
          animate={{ x: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag={"y"}
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        >
          drag me
        </motion.div>
      </div>
      <Divider className="my-4" />
      <div>
        4.XY方向にドラッグできる。
        <motion.div
          className="bg-orange-500 w-20 h-20 mt-2"
          animate={{ x: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag={true}
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        >
          drag me
        </motion.div>
      </div>
      <Divider className="my-4" />
    </div>
  );
};
