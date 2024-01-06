"use client";
import { Button, Divider, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

export const FramerMotion = () => {
  const [flg, setFlg] = useState(false);
  const onClick = () => setFlg(!flg);

  return (
    <div>
      <Link isExternal href="https://www.framer.com/motion/" showAnchorIcon>
        Framer Motion
      </Link>
      <br />
      アニメーションのライブラリ
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
      <div>
        5.タップすると縮む
        <motion.div className="bg-cyan-500 w-20 h-20 mt-2" whileTap={{ scale: 0.5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          tap me
        </motion.div>
      </div>
      <Divider className="my-4" />
      <div>
        6.タップすると広がる
        <motion.div whileTap={{ scale: 1.5 }} transition={{ type: "spring", stiffness: 200, damping: 8 }}>
          <motion.div className="flex">
            <motion.div className="bg-white w-10 h-10 mt-2 rounded-full relative">
              <motion.div className="bg-black h-5 w-4 absolute left-2 top-1 rounded-lg"></motion.div>
            </motion.div>
            <motion.div className="bg-white w-10 h-10 mt-2 rounded-full relative">
              <motion.div className="bg-black h-5 w-4 absolute left-2 top-1 rounded-lg"></motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="flex">
            <motion.div className="bg-red-500 h-3 w-10 ml-5 mt-2 rounded-lg"></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
