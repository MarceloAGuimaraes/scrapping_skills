require 'test_helper'

class DetranIntegrationControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get detran_integration_show_url
    assert_response :success
  end

end
