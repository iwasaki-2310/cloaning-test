import { Box, Center, Image, Spinner, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { FC, memo, useEffect } from 'react'
import { UserCard } from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers()
  useEffect(() => getUsers(), [])
  return (
    <>
      {loading ? (
        <Center height="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} m="auto">
              <UserCard
                imageUrl="https://www.livefreely2310.com/my-family/wp-content/uploads/2023/04/%E7%B5%90%E5%A9%9A%E5%BC%8F.jpg"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  )
})
