import Image from 'next/image'
import Balancer from "react-wrap-balancer";
import WhyChooseUs  from "@/components/shared/choose";

export default function About() {  

  return (
      <> 
        <div className="z-10 w-full max-w-2xl  px-5 xl:px-0">
            <article>
                <div className="my-2.5">
                    <Balancer>
                        About Us
                    </Balancer>
                </div>
                <Image
                    src={"/lion.jpeg"}
                    alt={`Cover Image for about us`}
                    width={1300}
                    height={1080}
                />
                <p className="my-2.5">
                    Safari Boots is an indigenous East African Safari Agency fully registered and licensed in Kampala Uganda. We drive travellers’ interests providing them with their desired ultimate safari experiences in Uganda and all around East Africa. Our committed staff has offered excellent services to several group clients and individual travellers over the years, as well as promoting Uganda-the pearl of Africa as the world’s best tourist destination.
                </p>
                <p className="my-2.5">
                    We offer Gorilla tracking safaris and Chimpanzee Trekking, wild game tours, Mountain Climbing adventures, city tours, white water rafting, boat cruise trips, fishing trips, horseback riding, bird watching, Car hire and hotel booking. We run safaris in all the major Uganda National Game Parks and Reserves such as Murchison falls, Queen Elizabeth, Bwindi Impenetrable forest National Park(East Africa’s Mountain Gorilla safari Destination), mountain Elgon, Kidepo, Mgahinga and the Virunga mountain range etc as well as all other prime safari destination in East Africa based on your interests.
                </p>
                <p className="my-2.5">
                    We enjoy a good working relationship with all hotels and lodges in all tourist destinations all over East Africa, therefore we can assist you with hotel reservation, Air ticketing plus all other travel related needs within our reach.
                </p>
                <p className="my-2.5">
                    We have a proven record of effectively and efficiently organizing safaris for individual and groups travellers, leisure travel, business and family trips. Our dedicated and experienced team will serve you with all of your travel requirements within and shall go an extra mile to ensure your adventure satisfaction. Effective service to your travel needs is our priority yet your budget and personal needs matter when choosing accommodation for your trip and you can see our reviews at SafariBookings.comand TripAdvisor.
                    We can make it to any destination of your choice being well equipped with reliable 4WD Toyota Land Cruisers, Super custom, minibuses and other SUV and Sedan tour cars which are customized and comfortable for our clients.
                </p>
                <p className="my-2.5">
                    Departure time to any safari is not fixed so we can start safaris any time on vote of our clients depending on the destination of choice. We use very experienced guides who are knowledgeable about travel and wildlife but please note that many times safaris start early morning due to the long distances driven from Kampala to get to these prime tour destinations and it’s the best time to find the prime game-wild creature.
                </p>
            </article>
        </div>
        <div className="z-10 w-full  px-5 xl:px-0">
            <WhyChooseUs />
        </div>
      </>
  )
}
