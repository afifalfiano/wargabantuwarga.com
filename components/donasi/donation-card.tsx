import React from "react";

import { PrimaryAnchorButton } from "~/components/ui/button";
import { DonationDetail } from "~/lib/content/donasi";

export function DonationCard(donation: DonationDetail) {
  return (
    <div className="flex flex-col shadow-md rounded-md overflow-hidden max-w-xs">
      <div className="flex-shrink-0">
        <img
          alt="donasi covid"
          className="h-24 object-cover w-full md:h-32"
          src={donation.image}
        />
      </div>
      <div className="p-3 text-xs space-y-1 h-0 flex-1">
        <p className="text-gray-500">{donation.category}</p>
        <h3 className="font-semibold text-gray-700 text-xs">
          {donation.title}
        </h3>
      </div>
      <div className="p-3 justify-center">
        <PrimaryAnchorButton
          block
          className="bg-light-blue-400 font-normal focus:bg-light-blue hover:bg-light-blue-600 text-white"
          color="none"
          data-testid={`donation-button-${donation.title}`}
          href={donation.url}
          rel="nofollow noopener noreferrer"
          rounded
          size="xs"
          target="_blank"
        >
          Donasi Sekarang
        </PrimaryAnchorButton>
      </div>
    </div>
  );
}