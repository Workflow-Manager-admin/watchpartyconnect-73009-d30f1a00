#!/bin/bash
cd /home/kavia/workspace/code-generation/watchpartyconnect-73009-d30f1a00/scener_frontend_workspace/scener_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

