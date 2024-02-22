import UserProfile from "../../user/components/UserProfile";
import ShippingAddressInProfile from "../../user/components/ShippingAddressInProfile";
import { useEffect } from "react";
import { useUser } from "../../user/contexts/UserContext";
import { useState } from "react";

function ShippingAddress() {
  const [isLoading, setIsLoading] = useState(true);
  const { shippingAddress } = useUser();

  useEffect(() => {
    if (shippingAddress) {
      console.log(shippingAddress.id, "shippingAddress");
      setIsLoading(false);
    }
  }, [shippingAddress]);
  return isLoading ? (
    <p
    className="animate-pulse text-2xl text-primary font-bold"
    >Please Create Your Address</p>
  ) : (
    <div className="glass rounded-lg p-2 ">
      <div className="flex justify-between border-b-2 border-base-100 ">
        <div className="text-2xl text-white font-bold">Shipping Address</div>
      </div>
      <UserProfile type="checkout" />
      <div>
        <div>
          <ShippingAddressInProfile />
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress;
