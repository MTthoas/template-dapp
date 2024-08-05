import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { isAddress } from "viem";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SendCard() {
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [errorSend, setErrorSend] = useState<string>("");

  const handleRecipientAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecipientAddress(e.target.value);
  };

  const handleSendTransaction = () => {
    if (recipientAddress !== "" && !isAddress(recipientAddress)) {
      setErrorSend("Please enter a valid address.");
      return;
    }
    setErrorSend("");
    console.log("Sending transaction to", recipientAddress);
  };

  return (
    <Card className="text-left text-primary rounded-lg shadow-lg tracking-normal">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-primary">Send</CardTitle>
        <CardDescription className="text-sm">
          <label>Send ether to another address</label>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eth">ETH</SelectItem>
                <SelectItem value="dai">DAI</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span className="text-xs">Balance: 20 ether</span>
        </div>
        <div>
          <CardDescription className="text-sm mt-4 mb-2">
            Give an address
          </CardDescription>
          <div>
            <Input
              className="flex-1"
              placeholder="0x..."
              type="text"
              value={recipientAddress || ""}
              onChange={handleRecipientAddressChange}
              isParse={true}
              onParse={() => {
                console.log("Parsing clipboard");
              }}
            />
          </div>
          <div
            className={`text-sm pt-2 ${errorSend !== "" ? "text-transparent" : "text-red-500"}`}
          >
            {errorSend}
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Button onClick={handleSendTransaction} className="w-full">
          Send Transaction
        </Button>
      </CardFooter>
    </Card>
  );
}
