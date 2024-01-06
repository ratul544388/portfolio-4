"use client";

import { reviews } from "@/lib/constant";
import { SectionHeading } from "./section-heading";
import { AvatarFallback, Avatar, AvatarImage } from "./ui/avatar";

export const Reviews = () => {
  return (
    <section className="flex flex-col gap-8 items-center">
      <SectionHeading heading="Reviews" />
      <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard {...review} key={review.username} />
        ))}
      </div>
    </section>
  );
};

const ReviewCard = ({
  image,
  name,
  username,
  review,
}: {
  image: string;
  name: string;
  username: string;
  review: string;
}) => {
  return (
    <div className="p-6 rounded-xl border shadow-md space-y-6 max-w-[350px]">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>
            {name.split(" ").map((word) => (
              <>{word[0]}</>
            ))}
          </AvatarFallback>
          <AvatarImage src={image} alt={name} className="object-cover" />
        </Avatar>
        <div>
          <h3 className="font-bold leading-4">{name}</h3>
          <p className="text-sm text-muted-foreground">{username}</p>
        </div>
      </div>
      <p className="text-muted-foreground font-medium text-sm">{review}</p>
    </div>
  );
};
