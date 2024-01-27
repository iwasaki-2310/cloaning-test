import {
  Stack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from '@chakra-ui/react'
import { ChangeEvent, FC, memo, useEffect, useState } from 'react'
import { User } from '../../../types/api/user'
import { useLoginUser } from '../../../hooks/useLoginUser'
import { PrimaryButton } from '../../atoms/button/PrimaryButton'

type Props = {
  user: User | null
  isOpen: boolean
  isAdmin?: boolean
  onClose: () => void
}

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props
  const [userName, setUserName] = useState('')
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const { loginUser } = useLoginUser()

  useEffect(() => {
    setUserName(user?.username ?? '')
    setName(user?.name ?? '')
    setMail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user])

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)
  const onChangeName = () => (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const onChangeMail = () => (e: ChangeEvent<HTMLInputElement>) => setMail(e.target.value)
  const onChangePhone = () => (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

  const onClickUpdate = () => alert()

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value={userName} onChange={onChangeUserName} isReadOnly={!loginUser?.isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value={name} onChange={onChangeName} isReadOnly={!loginUser?.isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value={mail} onChange={onChangeMail} isReadOnly={!loginUser?.isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={phone} onChange={onChangePhone} isReadOnly={!loginUser?.isAdmin} />
              </FormControl>
            </Stack>
          </ModalBody>
          {loginUser?.isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
})
