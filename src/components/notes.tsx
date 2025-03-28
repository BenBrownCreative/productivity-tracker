import styled from "@emotion/styled";
import { useState } from "react";
import { Title } from "../utils/commonStyles";
import { AddCircleOutline, DeleteOutline } from "@mui/icons-material";
import { Button, Input } from "@mui/material";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NotesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NoteItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background-color: var(--colors-background);
  border-radius: 0.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  column-gap: 0.5rem;
  justify-content: space-between;
`;

// needs to be shared
const StyledModal = styled.div`
  display: flex;
  position: absolute;
  z-index: 100;
  border-radius: 0.5rem;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--colors-background);
  padding: 2rem;
  width: 600px;
  flex-direction: column;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
`;

const Notes = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [noteInput, setNoteInput] = useState("");
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const handleAddNote = () => {
    if (noteInput.trim() === "") return;
    setNotes(prev => [...prev, noteInput.trim()]);
    setNoteInput("");
  };

  // instead of removing we could strike them out
  // and have a filter to show only active notes
  const handleRemoveNote = (index: number) => {
    setNotes(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <TitleWrapper>
        <Title>Notes</Title>
        <AddCircleOutline color="primary" onClick={openModal} />
      </TitleWrapper>

      <NotesList>
        {notes.map((note, index) => (
          <NoteItem key={index}>
            <span>{note}</span>
            <DeleteOutline
              color="secondary"
              onClick={() => handleRemoveNote(index)}
            />
          </NoteItem>
        ))}
      </NotesList>

      {open && (
        <>
          <StyledModal>
            <InputWrapper>
              <h3>New Note</h3>

              <Button
                onClick={handleAddNote}
                variant="contained"
                color="primary"
              >
                Add
              </Button>
            </InputWrapper>
            <Input
              type="text"
              value={noteInput}
              onChange={e => setNoteInput(e.target.value)}
              multiline
              placeholder="Add a new note"
            />
          </StyledModal>
          <Overlay onClick={() => setOpen(false)} />
        </>
      )}
    </>
  );
};

export default Notes;
