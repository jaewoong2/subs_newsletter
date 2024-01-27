#!/bin/sh
echo "Creating .env.production file..."
touch .env.production
echo "NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}" > .env.production
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}" >> .env.production
echo "NEXT_PUBLIC_CURRENT_URL=http://localhost:3000" >> .env.production

cat .env.production
echo ".env.production file created successfully."
