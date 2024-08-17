
export default function ConnectButton() {
    
  return (
    <div> if (session && session.type === SessionType.WithProfile) {
        return (
          <>
            <p className="mb-4 text-gray-500">
              You are logged in as{" "}
              <span className="text-gray-800 font-semibold">
                {session.profile.handle?.fullHandle ?? session.profile.id}
              </span>
              .
            </p>
            <LogoutButton />
          </>
        );
      }
    </div>
  )
}
