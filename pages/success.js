import { useRouter } from "next/router";
const Success = () => {
  const router = useRouter();
  const handleBack = (e) =>{  
    e.preventDefault()
    router.push("/")
  }
  return (
    <div className="success__wrapper">
      <span className="success__msg">Thank you. You are now subscribed.</span>
      <div className="success__action">
          <button onClick={handleBack} type="submit" className="action__submit">Return Home</button>
        </div>
    </div>
  );
};

export default Success;
