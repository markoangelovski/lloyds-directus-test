# Stage 1: Build custom extensions
FROM node:24-alpine AS builder

WORKDIR /app

# Copy all extensions
COPY extensions ./extensions

# Install + build each extension (interfaces may need building)
# This loop ensures each package.json gets installed and built
RUN for dir in ./extensions/*/*/ ; do \
      if [ -f "$dir/package.json" ]; then \
        cd $dir && npm install && if [ -f package.json ] && npm run | grep -q 'build'; then npm run build; fi && cd - ; \
      fi \
    done

# Stage 2: Directus base image with extensions baked in
FROM directus/directus:latest

# Copy built extensions into the image
COPY --from=builder /app/extensions /directus/extensions

# Expose default Directus port
EXPOSE 8055