import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const EndCallButton = () => {
  const call = useCall();
  const route = useRouter();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwer =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwer) return null;

  return (
    <Button
      onClick={async () => {
        await call?.endCall();
        route.push("/");
      }}
      className="bg-red-500"
    >
      End call for everyone
    </Button>
  );
};

export default EndCallButton;
