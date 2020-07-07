import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList.js'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomsContainer ({context}) {
  const {loading,sortedRooms, rooms} = context;
  if (loading) {
    return <Loading />
  }
  return(
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  )
}

export default withRoomConsumer(RoomsContainer)

/*  You can use the code here if you don't use withRoomConsumer, which is a higher order 
component that we made in context, to simplify code for cases where we would need to use 
this info in many places 

import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList.js'
import {RoomConsumer} from '../context'
import Loading from './Loading'

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {
        (value) => {
          const {loading, sortedRooms, rooms} = value;
          if (loading) {
            return <Loading />
          }
          return(
            <div>
              Hello from Rooms Container
              <RoomFilter rooms={rooms} />
              <RoomList rooms={sortedRooms} />
            </div>
          )
        }
      }
    </RoomConsumer>
   
  )
}
*/