ganache-cli \
    -h "0.0.0.0" \
    "--account=\"0x0000000000000000000000000000000000000000000000000000000000000001,1000000000000000000000\"" \
    "--account=\"0x0000000000000000000000000000000000000000000000000000000000000002,1000000000000000000000\"" \
    "--account=\"0x0000000000000000000000000000000000000000000000000000000000000003,1000000000000000000000\"" \
    "--account=\"0x0000000000000000000000000000000000000000000000000000000000000004,1000000000000000000000\"" \
    "--account=\"0x0000000000000000000000000000000000000000000000000000000000000005,1000000000000000000000\"" \
    "--account=\"0x0000000000000000000000000000000000000000000000000000000000000006,1000000000000000000000\"" \
    "--account=\"0x0000000000000000000000000000000000000000000000000000000000000007,1000000000000000000000\"" \
    "--account=\"0x0000000000000000000000000000000000000000000000000000000000000008,1000000000000000000000\"" \
    "--account=\"0x0000000000000000000000000000000000000000000000000000000000000009,1000000000000000000000\"" \
    "--account=\"0x0000000000000000000000000000000000000000000000000000000000000010,1000000000000000000000\"" &
sleep 1
git branch
git pull origin master
truffle compile
truffle migrate
sleep infinity