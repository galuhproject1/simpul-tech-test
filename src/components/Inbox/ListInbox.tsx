import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { InboxType } from "../../libs/Types/inbox.type";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";
import Loading from "../Loading";

type Props = {
  handleOpenInbox: (id: number) => void;
  dataInbox: InboxType[];
};
const ListInbox = ({ handleOpenInbox, dataInbox }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Loading loadingFor="Chats" />
      ) : (
        <Box>
          {dataInbox.map((item) => (
            <List
              sx={{ width: "100%", cursor: "pointer" }}
              onClick={() => {
                handleOpenInbox(item.id);
              }}
              key={item.id}
            >
              <ListItem sx={{ display: "flex", gap: 2, alignItems: "start" }}>
                {item.isGroup ? (
                  <AvatarGroup
                    max={2}
                    sx={{
                      width: "60px",
                      "& .MuiAvatar-root": { border: "none" },
                    }}
                    spacing={24}
                  >
                    <Avatar sx={{ bgcolor: "#2F80ED" }}>
                      <PersonIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: "#E0E0E0" }}>
                      <PersonIcon />
                    </Avatar>
                  </AvatarGroup>
                ) : (
                  <Box sx={{ width: "60px" }}>
                    <Avatar sx={{ bgcolor: "#2F80ED" }}>F</Avatar>
                  </Box>
                )}
                <Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: 14,
                        color: "#2F80ED",
                        width: "420px",
                      }}
                    >
                      {item.isGroup ? item.groupName : item.lastSender}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 12,
                      color: "#4F4F4F",
                      display: `${item.isGroup ? "block" : "none"}`,
                    }}
                  >
                    {item.lastSender}
                  </Typography>
                  <Typography sx={{ fontWeight: 400, fontSize: 12 }}>
                    {item.lastMessage}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 400, fontSize: 12 }}>
                    {item.datesend}
                  </Typography>
                  <div
                    className={`w-2 h-2 rounded-full absolute right-10 bg-[#EB5757] ${
                      item.read ? "hidden" : "block"
                    }`}
                  ></div>
                </Box>
              </ListItem>
              <Divider variant="middle" />
            </List>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ListInbox;
