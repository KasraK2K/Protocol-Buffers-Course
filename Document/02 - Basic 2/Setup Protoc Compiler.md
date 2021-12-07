
# Setup Protoc Compiler

---

In order to perform code generation, you will need to install `protoc`  on your computer.
&nbsp;&nbsp;

## MacOSX
---

It is actually very easy, open a command line interface and type `brew install protobuf` 
&nbsp;&nbsp;


## Ubuntu (Linux)
---

Find the correct protocol buffers version based on your Linux Distro: [https://github.com/google/protobuf/releases](https://github.com/google/protobuf/releases)
&nbsp;&nbsp;

**Example with x64**:

_Make sure you grab the latest version_
```bash
curl -OL https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-linux-x86_64.zip
```

_Unzip_
```bash
unzip protoc-3.5.1-linux-x86_64.zip -d protoc3
```

_Move protoc to /usr/local/bin/_
```bash
sudo mv protoc3/bin/* /usr/local/bin/
```

_Move protoc3/include to /usr/local/include/_
```bash
sudo mv protoc3/include/* /usr/local/include/
```

**Optional**: _change owner_
```bash
sudo chown [user] /usr/local/bin/protoc
sudo chown -R [user] /usr/local/include/google
```
&nbsp;&nbsp;

## Windows
---

Download the windows archive: [https://github.com/google/protobuf/releases](https://github.com/google/protobuf/releases)

Example: [https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-win32.zip](https://github.com/google/protobuf/releases/download/v3.5.1/protoc-3.5.1-win32.zip)

Extract all to `C:\proto3`  

Your directory structure should now be
`C:\proto3\bin`   
`C:\proto3\include`   

Finally, add _C:\proto3\bin_ to your _PATH_:
1.  From the desktop, right-click My Computer and click Properties.
2.  In the System Properties window, click on the Advanced tab
3.  In the Advanced section, click the Environment Variables button.
4.  Finally, in the Environment Variables window (as shown below), highlight the Path variable in the Systems Variable section and click the Edit button. Add or modify the path lines with the paths you wish the computer to access. Each different directory is separated with a semicolon as shown below.

    > C:\Program Files; C:\Winnt; ...... **; C:\proto3\bin**
    
(you need to add `; C:\proto3\bin`  at the end)