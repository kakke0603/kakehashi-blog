"use client"
import { Avatar, Link, User } from "@nextui-org/react"
import React from "react"

export default function Profile() {
  return (
    <div className="mt-5">
      <User
        name="かっけ"
        description={
          <div>
            ふるすたっくえんじにあ(仮)
            <br />
            <Link href="https://twitter.com/kkhs0603" size="sm" isExternal>
              @kkhs0603
            </Link>
          </div>
        }
        avatarProps={{ name: "K" }}
      />
    </div>
  )
}
