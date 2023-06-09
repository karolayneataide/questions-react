import { ChangeEvent, useState } from "react";
import * as S from "./Notification.styles";

export interface MessageItem {
  id: string;
  notification: string;
}

export interface NotificationsProps {
  messages: MessageItem[];
}

export function Notification({ messages }: NotificationsProps) {
  return (
    <div>
      <S.Title>Notificações</S.Title>
      {messages && messages.length > 0 ? (
        <S.List>
          {messages.map((message) => (
            <S.List key={message.id}>{message.notification}</S.List>
          ))}
        </S.List>
      ) : (
        <div>
          <S.Typography>Nenhuma notificação</S.Typography>
          <Message addMessage={(message) => messages.push(message)} />
        </div>
      )}
    </div>
  );
}

export interface MessageProps {
  addMessage: (message: MessageItem) => void;
}

export function Message({ addMessage }: MessageProps) {
  const [notification, setNotification] = useState("");

  function handleChangeNotification(event: ChangeEvent<HTMLInputElement>) {
    setNotification(event.target.value);
  }

  function handleClick() {
    const newMessage = {
      id: Math.random().toString(14),
      notification: notification,
    };

    addMessage(newMessage);
    setNotification("");
  }

  return (
    <form>
      <S.Container>
        <div>
          <label>
            <S.Typography>Mensagem: </S.Typography>
            <input
              type="text"
              value={notification}
              name="Mensagem"
              onChange={handleChangeNotification}
            />
          </label>
        </div>
        <div>
          <button type="button" onClick={handleClick}>
            Enviar
          </button>
        </div>
      </S.Container>
    </form>
  );
}
