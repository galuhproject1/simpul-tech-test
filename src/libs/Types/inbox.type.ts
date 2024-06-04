export type InboxType = {
  id: number;
  lastSender: string;
  lastMessage: string;
  receiver: string;
  message?: string;
  datesend: string;
  messageType: string;
  isGroup: boolean;
  groupName?: string;
  read: boolean;
  status?: string;
  detailInbox: InboxByHistoryType[];
};

type InboxByHistoryType = {
  date: string;
  detailInbox: DetailInboxType[];
};

type DetailInboxType = {
  id: number;
  sender: string;
  message: string;
  date: string;
};
