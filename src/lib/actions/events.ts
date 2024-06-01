'use server'

import { gql } from "@apollo/client";
import { getClient } from "../getApolloClient";
import type { EventsDataTypes } from "../../types/EventDataTypes";
import { getUser } from "@/util/getUser";
import { revalidatePath } from "next/cache";

export async function insertEvent(formData: EventsDataTypes) {
  const user_id = await getUser();
  const description = formData.description;
  const INSERT_EVENT = gql`
    mutation INSERT_EVENT($description: String!) {
      insert_events_one(
        object: {
          title: "${formData.title}"
          description: $description
          image_url: "${formData.image_url}"
          date: "${formData.date}"
          user_id: "${user_id}"
        }
      ) {
        id
      }
    }
  `;

  const { data } = await getClient().mutate({
    mutation: INSERT_EVENT,
    variables: { description },
  });

  revalidatePath('/');
  return { data };
}

export async function getAllEvents() {
  const GET_ALL_EVENTS = gql`
  query GET_ALL_EVENTS {
    events {
      title
      description
      image_url
      date
      user_id
      id
    }
  }
  `;

  const { data } = await getClient().query({
    query: GET_ALL_EVENTS,
  });

  revalidatePath('/all-events');
  return { data };
}

export async function getEventById(event_id: string) {
  const GET_ALL_EVENTS = gql`
  query GET_EVENT_BY_ID {
    events(where: {id: {_eq: "${event_id}"}}) {
      title
      description
      image_url
      user_id
      id
    }
  }
  `;

  const { data } = await getClient().query({
    query: GET_ALL_EVENTS,
  });

  return { data };
}

export async function getEventByUserId() {
  const user_id = await getUser();
  const GET_EVENT_BY_USER_ID = gql`
  query GET_EVENT_BY_ID {
    events(where: {user_id: {_eq: "${user_id}"}}) {
      title
      description
      image_url
      date
      id
      user_id
    }
  }
  `;

  const { data } = await getClient().query({
    query: GET_EVENT_BY_USER_ID,
  });

  revalidatePath('/my-events');
  return { data };
}

export async function addVisitor(event_id: string) {
  const user_id = await getUser();
  const INSERT_VISITOR = gql`
  mutation INSERT_VISITOR {
    insert_visitors_one(object: {event_id: "${event_id}", user_id: "${user_id}"}) {
      id
    }
  }
  `;

  const { data } = await getClient().mutate({
    mutation: INSERT_VISITOR,
  });

  return { data };
}

export async function getAllVisitors(event_id: string) {
  const GET_ALL_VISITORS = gql`
  query GET_ALL_VISITORS {
    visitors(where: {event_id: {_eq: "${event_id}"}}) {
      event_id
      user_id
      id
    }
  }
  `;

  const { data } = await getClient().query({
    query: GET_ALL_VISITORS,
  });

  return { data };
}

export async function deleteVisitor(event_id: string) {
  const user_id = await getUser();
  const DELETE_VISITOR = gql`
  mutation DELETE_VISITOR {
    delete_visitors(where: {event_id: {_eq: "${event_id}"}, user_id: {_eq: "${user_id}"}}) {
      returning {
        event_id
        id
        user_id
      }
    }
  }
  `;

  const { data } = await getClient().mutate({
    mutation: DELETE_VISITOR,
  });

  return { data };
}