'use server'

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from '@stream-io/node-sdk';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async() => {
  const user = await currentUser();
  
  if(!user) throw new Error("No user found");
  if(!apiKey) throw new Error("Stream API keys not found");
  if(!apiSecret) throw new Error("Stream secret key not found");

  const streamClient = new StreamClient
}
