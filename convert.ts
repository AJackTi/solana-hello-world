import * as anchor from "@project-serum/anchor";
import fs from "fs";

const poolSecret = JSON.parse(
  fs.readFileSync("./target/deploy/solana_hello_world-keypair.json", "utf-8")
);

let poolKeypair = anchor.web3.Keypair.fromSecretKey(new Uint8Array(poolSecret));
console.log(poolKeypair.publicKey.toBase58());
