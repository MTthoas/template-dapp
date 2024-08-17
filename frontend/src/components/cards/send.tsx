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
import { Address, isAddress } from "viem";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SendCard({
  addressSource,
}: {
  addressSource: Address | undefined;
}) {
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [errorSend, setErrorSend] = useState<string>("");
  const [loadingTransaction, setLoadingTransaction] = useState<boolean>(false);
  const [selectedToken, setSelectedToken] = useState<string>("eth");

  const handleRecipientAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecipientAddress(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSendTransaction = async () => {
    if (recipientAddress !== "" && !isAddress(recipientAddress)) {
      setErrorSend("Please enter a valid address.");
      return;
    }

    if (amount === "" || isNaN(Number(amount))) {
      setErrorSend("Please enter a valid amount.");
      return;
    }

    setLoadingTransaction(true);
    console.log("Sending transaction...");

    try {
      const amountInWei = BigInt(Number(amount) * 10 ** 18);

      // await sendTransaction(config, {
      //   to: "0xd2135CfB216b74109775236E36d4b433F1DF507B",
      //   value: amountInWei,
      // });
    } catch (error) {
      setErrorSend("Transaction failed.");
      console.error(error);
    } finally {
      setLoadingTransaction(false);
    }
  };

  return (
    <Card className="text-left text-primary rounded-lg shadow-lg tracking-normal">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-primary">Send</CardTitle>
        <CardDescription className="text-sm">
          <label>Send tokens to another address</label>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Select onValueChange={setSelectedToken}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select a token" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eth">ETH</SelectItem>
                <SelectItem value="dai">DAI</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span className="text-xs">
            Balance: 20 {selectedToken.toUpperCase()}
          </span>
        </div>
        <div>
          <CardDescription className="text-sm mt-4 mb-2">
            Enter recipient address
          </CardDescription>
          <Input
            className="flex-1"
            placeholder="0x..."
            type="text"
            value={recipientAddress}
            onChange={handleRecipientAddressChange}
          />
        </div>
        <div>
          <CardDescription className="text-sm mt-4 mb-2">
            Enter amount
          </CardDescription>
          <Input
            className="flex-1"
            placeholder="Amount"
            type="text"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div
          className={`text-sm pt-2 ${
            errorSend !== "" ? "text-red-500" : "text-transparent"
          }`}
        >
          {errorSend}
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Button
          onClick={handleSendTransaction}
          className="w-full"
          loading={loadingTransaction}
        >
          Send Transaction
        </Button>
      </CardFooter>
    </Card>
  );
}
