export interface Conversation {
    title: string;
    content: string;
    image: string;
  }
  
  // Define an interface for the conversation list
  export interface ConversationList {
    conversation_list: Conversation[];
  }