using BlazorWasm.Quotlets.Models;
using Microsoft.JSInterop;

namespace BlazorWasm.Quotlets.Pages
{
    public partial class Main
    {
        private QuotletsResponseModel? QuotletsData { get; set; }
        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                await GetQuotlets();
                StateHasChanged();
                await LoadJavaScript();
            }
        }

        private async Task LoadJavaScript()
        {
            await Task.Delay(1000);
            await JsRuntime.InvokeVoidAsync("loadJs", "assets/js/switch.js");
            await JsRuntime.InvokeVoidAsync("loadJs", "assets/js/main.js");
        }

        private async Task GetQuotlets(int pageNo = 1)
        {
            QuotletsData = await Service.GetQuotlets(pageNo);
        }

        private async Task PageChanged(int pageNo)
        {
            QuotletsData = await Service.GetQuotlets(pageNo);
            StateHasChanged();
            await LoadJavaScript();
        }
    }
}
