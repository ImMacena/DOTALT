import { useCallback, useContext, useEffect, useState } from "react";

import axios from "axios";

import { Container } from "../../components/Container";
import { FormControl } from "../../components/FormControl";
import { PageTitle } from "../../components/PageTitle";

import { BsTrash } from "react-icons/bs";

import {
  MochilaContainer,
  MochilaFilesList,
  MochilaForm,
  MochilaFormInputs,
} from "./styles";
import { ActionBtn } from "../../components/ActionBtn";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { toast } from "react-toastify";

export const Mochila = () => {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState();
  const [fileKey, setFileKey] = useState();

  const auth = useContext(AuthContext);

  const [files, setFiles] = useState([]);

  const userID = auth.user?.id;

  const getFiles = useCallback(async (ID) => {
    await axios
      .get(`http://localhost:3030/file/${ID}`)
      .then((response) => {
        setFiles(response.data);
      })
      .catch((error) => {
        console.log("erro:", error);
      });
  }, []);

  const deleteFile = useCallback(
    async (fileID) => {
      await axios
        .delete(`http://localhost:3030/file/${fileID}`)
        .then(() => {
          toast.success("Arquivo deletado.", {
            position: "top-right",
            autoClose: 2000,
          });

          getFiles(userID);
        })
        .catch((error) => {
          console.log("erro:", error);
        });
    },
    [getFiles, userID]
  );

  const uploadFile = useCallback(() => {
    const formData = new FormData();

    formData.append("name", fileName);
    formData.append("userID", userID);
    formData.append("file", file);

    const sendFile = async () => {
      await axios
        .post(`http://localhost:3030/file`, formData)
        .then(() => {
          toast.success("Arquivo salvo na mochila.", {
            position: "top-right",
            autoClose: 2000,
          });

          setFileName("");
          setFileKey(Math.random().toString(36));

          getFiles(userID);
        })
        .catch((error) => {
          return toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 2000,
          });
        });
    };

    sendFile();
  }, [file, fileName, userID, getFiles]);

  useEffect(() => {
    getFiles(userID);
  }, [userID, getFiles]);

  return (
    <MochilaContainer>
      <Container>
        <PageTitle>MOCHILA</PageTitle>

        <MochilaForm>
          <MochilaFormInputs>
            <FormControl
              id="fileName"
              label="Nome do arquivo"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              type="text"
              required={true}
            />

            <FormControl
              id="file"
              label="Escolher arquivo"
              type="file"
              key={fileKey}
              onChange={(e) => setFile(e.target.files[0])}
              required={true}
            />
          </MochilaFormInputs>

          <ActionBtn color={"secondary"} fill={"fill"} action={uploadFile}>
            SALVAR
          </ActionBtn>
        </MochilaForm>

        <MochilaFilesList>
          {files &&
            files.map((file, key) => {
              const fileSize = file.size / 1000;

              return (
                <li key={key}>
                  <div>
                    <h3>{file.name}</h3>
                    <span>
                      {file.file} ({fileSize} kb)
                    </span>
                  </div>

                  <div>
                    <ActionBtn color={"secondary"} fill={"fill"}>
                      DOWNLOAD
                    </ActionBtn>

                    <BsTrash onClick={() => deleteFile(file.id)} />
                  </div>
                </li>
              );
            })}
        </MochilaFilesList>
      </Container>
    </MochilaContainer>
  );
};
