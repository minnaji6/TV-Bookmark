Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins 'http://localhost:4000'

        resource '/shows',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head]
        resource '/comments',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head]
        resource '/shows/:id',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head]
        resource '/comments/:id',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end

end

  