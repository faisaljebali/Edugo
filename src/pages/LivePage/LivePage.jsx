import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Jitsi from 'react-jitsi'

function LivePage() {

    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();
    const { roomName } = useParams();
    const { roomPassword } = useParams();
    const userFullName = user.user.name+' '+user.user.surname;

    const handleAPI = (JitsiMeetAPI) => {
        JitsiMeetAPI.addEventListener('passwordRequired', () => {
            JitsiMeetAPI.executeCommand('password', roomPassword);
        });
    }

    return (
        <div className="live-jitsi">
        <Jitsi
        roomName={roomName}
        displayName={userFullName}
        password={roomPassword}
        onAPILoad={handleAPI}
        />
      </div>
    );
}

export { LivePage };