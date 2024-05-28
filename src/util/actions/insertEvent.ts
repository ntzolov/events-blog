'use server'

import { gql } from "@apollo/client";
import { getClient } from "../getApolloClient";
import type { FormDataTypes } from "../../lib/types/FormData";

export async function insertEvent(formData: FormDataTypes) {
  const INSERT_EVENT = gql`
    mutation INSERT_EVENT {
      insert_events_one(
        object: {
          title: "${formData.title}"
          description: "${formData.description}"
          image_url: "${formData.image_url}"
          date: "${formData.date}"
          user_id: "${formData.user}"
        }
      ) {
        id
      }
    }
  `;

  const { data } = await getClient().mutate({
    mutation: INSERT_EVENT,
  });

  return { data };
}